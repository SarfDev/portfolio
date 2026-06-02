import { gsap } from 'gsap'

/**
 * Official GSAP `horizontalLoop` helper function (GreenSock).
 * Source: https://gsap.com/docs/v3/HelperFunctions/helpers/seamlessLoop/
 *
 * Animates a group of elements along the x-axis in a seamless, responsive loop.
 * Uses xPercent so it keeps working even if widths change on resize.
 *
 * config options: speed, paused, repeat, reversed, snap, paddingRight.
 * Returns a gsap timeline augmented with next/previous/current/toIndex helpers.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function horizontalLoop(items: any, config?: any): any {
  items = gsap.utils.toArray(items)
  config = config || {}
  const tl: any = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: 'none' },
    onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
  })
  const length = items.length
  const startX = items[0].offsetLeft
  const times: number[] = []
  const widths: number[] = []
  const xPercents: number[] = []
  let curIndex = 0
  const pixelsPerSecond = (config.speed || 1) * 100
  const snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1)
  let curX: number
  let distanceToStart: number
  let distanceToLoop: number
  let item: any
  let i: number

  gsap.set(items, {
    xPercent: (i: number, el: Element) => {
      const w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px') as string))
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, 'x', 'px') as string) / w) * 100 +
          (gsap.getProperty(el, 'xPercent') as number)
      )
      return xPercents[i]
    },
  })

  gsap.set(items, { x: 0 })
  const totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth * (gsap.getProperty(items[length - 1], 'scaleX') as number) +
    (parseFloat(config.paddingRight) || 0)

  for (i = 0; i < length; i++) {
    item = items[i]
    curX = (xPercents[i] / 100) * widths[i]
    distanceToStart = item.offsetLeft + curX - startX
    distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, 'scaleX') as number)
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100),
        },
        {
          xPercent: xPercents[i],
          duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add('label' + i, distanceToStart / pixelsPerSecond)
    times[i] = distanceToStart / pixelsPerSecond
  }

  function toIndex(index: number, vars?: any) {
    vars = vars || {}
    if (Math.abs(index - curIndex) > length / 2) index += index > curIndex ? -length : length
    const newIndex = gsap.utils.wrap(0, length, index)
    let time = times[newIndex]
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) }
      time += tl.duration() * (index > curIndex ? 1 : -1)
    }
    curIndex = newIndex
    vars.overwrite = true
    return tl.tweenTo(time, vars)
  }

  tl.next = (vars?: any) => toIndex(curIndex + 1, vars)
  tl.previous = (vars?: any) => toIndex(curIndex - 1, vars)
  tl.current = () => curIndex
  tl.toIndex = (index: number, vars?: any) => toIndex(index, vars)
  tl.times = times
  tl.progress(1, true).progress(0, true)

  if (config.reversed) {
    tl.vars.onReverseComplete()
    tl.reverse()
  }

  return tl
}
