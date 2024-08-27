import { splitProps, type JSX } from 'solid-js'

import { cx } from '~/lib/utils'
import { buttonVariants, type ButtonVariants } from '~/styled/components/button'
import { cardVariants } from '~/styled/components/card'
import { headingVariants } from '~/styled/components/heading'
import { sliderVariants } from '~/styled/components/slider'
import { textVariants } from '~/styled/components/text'

export const Demo = () => (
  <div class="flex flex-col items-start gap-6">
    <div class="flex w-[416px] flex-shrink-0 flex-col gap-6">
      <Card1 />
      <Card2 />
    </div>
  </div>
)

const CardWrapper = (props: { children: JSX.Element }) => {
  return (
    <div
      class={cx(
        cardVariants({ size: '3', variant: 'surface' }),
        '[--backdrop-filter-panel:none] [--base-card-surface-box-shadow:none] [--card-background-color:var(--hero-card-background-color)] [box-shadow:inset_var(--shadow-4)]',
      )}
    >
      {props.children}
    </div>
  )
}
const Button = (
  props: JSX.IntrinsicElements['button'] & { styled?: ButtonVariants },
) => {
  const [local, rest] = splitProps(props, ['styled'])

  return <button {...rest} class={cx(buttonVariants(local.styled))} />
}

const Card1 = () => {
  return (
    <CardWrapper>
      <div class="mb-5 flex items-center justify-between">
        <h3 class={headingVariants({ size: '4' })}>Queue</h3>
        <div class="-rt-r-my-1 flex gap-4">
          <Button styled={{ variant: 'ghost', size: '2' }} tabindex="-1">
            Clear
          </Button>
          <Button
            data-accent-color
            tabindex="-1"
            styled={{ variant: 'ghost', size: '2' }}
          >
            Repeat
          </Button>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <img
            src="https://workos.imgix.net/images/79645741-51e0-47fc-bb40-2fa66cf9f68e.png?auto=format&fit=clip&q=80&w=192"
            class="box-border block [height:var(--width)] [width:var(--width)]"
            style={{
              '--width': '48px',
              '--height': '48px',
              'object-fit': 'cover',
              'border-radius': 'var(--radius-2)',
            }}
          />
          <div
            class="box-border block flex-grow [width:var(--width)]"
            style={{ '--width': 0 }}
          >
            <div class="rt-Text rt-r-size-2 rt-truncate">
              The Less I Know the Better
            </div>
            <div
              data-accent-color="gray"
              class={textVariants({ size: '2', class: 'truncate' })}
            >
              Tame Impala – Currents
            </div>
          </div>
          <div class="box-border block">
            <div data-accent-color="gray" class="rt-Text rt-r-size-2">
              3:39
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <img
            src="https://workos.imgix.net/images/95ff9b99-36f3-46d8-a3fe-9387fd7c3c32.png?auto=format&fit=clip&q=80&w=192"
            class="box-border block [height:var(--width)] [width:var(--width)]"
            style={{
              '--width': '48px',
              '--height': '48px',
              'object-fit': 'cover',
              'border-radius': 'var(--radius-2)',
            }}
          />
          <div
            class="box-border block flex-grow [width:var(--width)]"
            style={{ '--width': 0 }}
          >
            <div class={textVariants({ size: '2', class: 'truncate' })}>
              Pieces
            </div>
            <div
              data-accent-color="gray"
              class={textVariants({ size: '2', class: 'truncate' })}
            >
              Villagers – Becoming a Jackal
            </div>
          </div>
          <div class="box-border block">
            <div data-accent-color="gray" class="rt-Text rt-r-size-2">
              5:25
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <img
            src="https://workos.imgix.net/images/945c66a9-afd9-4b1c-8eb0-4ce3992731ca.png?auto=format&fit=clip&q=80&w=192"
            class="box-border block [height:var(--width)] [width:var(--width)]"
            style={{
              '--width': '48px',
              '--height': '48px',
              'object-fit': 'cover',
              'border-radius': 'var(--radius-2)',
            }}
          />
          <div
            class="box-border block flex-grow [width:var(--width)]"
            style={{ '--width': 0 }}
          >
            <div class="rt-Text rt-r-size-2 rt-truncate">Cola</div>
            <div
              data-accent-color="gray"
              class={textVariants({ size: '2', class: 'truncate' })}
            >
              Arlo Parks – Super Sad Generation
            </div>
          </div>
          <div class="box-border block">
            <div data-accent-color="gray" class={textVariants({ size: '2' })}>
              3:50
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <img
            src="https://workos.imgix.net/images/3d9075e4-c232-4fb5-a1a4-b0a33d669192.png?auto=format&fit=clip&q=80&w=192"
            class="box-border block [height:var(--width)] [width:var(--width)]"
            style={{
              '--width': '48px',
              '--height': '48px',
              'object-fit': 'cover',
              'border-radius': 'var(--radius-2)',
            }}
          />
          <div
            class="box-border block flex-grow [width:var(--width)]"
            style={{ '--width': 0 }}
          >
            <div class={textVariants({ size: '2', class: 'truncate' })}>
              Do the Astral Plane
            </div>
            <div
              data-accent-color="gray"
              class={textVariants({ size: '2', class: 'truncate' })}
            >
              Flying Lotus – Cosmogramma
            </div>
          </div>
          <div class="box-border block">
            <div data-accent-color="gray" class="rt-Text rt-r-size-2">
              3:58
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <img
            src="https://workos.imgix.net/images/8d431b64-ebe8-41be-b986-2f59cb5c567d.png?auto=format&fit=clip&q=80&w=192"
            class="box-border block [height:var(--width)] [width:var(--width)]"
            style={{
              '--width': '48px',
              '--height': '48px',
              'object-fit': 'cover',
              'border-radius': 'var(--radius-2)',
            }}
          />
          <div
            class="box-border block flex-grow [width:var(--width)]"
            style={{ '--width': 0 }}
          >
            <div class={textVariants({ size: '2', class: 'truncate' })}>
              Left Hand Free
            </div>
            <div
              data-accent-color="gray"
              class={textVariants({ size: '2', class: 'truncate' })}
            >
              Alt-J – This Is All Yours
            </div>
          </div>
          <div class="box-border block">
            <div data-accent-color="gray" class={textVariants({ size: '2' })}>
              2:54
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

const Card2 = () => {
  return (
    <CardWrapper>
      <div class="mb-5 flex items-center justify-between">
        <h3 class={textVariants({ size: '4', class: 'lt-start' })}>Sound</h3>
        <div class="flex gap-4">
          <span data-accent-color="gray" class={textVariants()}>
            Yamaha THR
          </span>
        </div>
      </div>
      <div
        class="mb-5 mt-2 flex items-center gap-2 [height:var(--height)]"
        style={{ '--height': '16px' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="20"
          height="20"
          fill="currentcolor"
          fill-opacity="0.7"
          color="var(--gray-a9)"
        >
          <path d="M16.3333 4.66669L13.5286 7.33335H11C9.89533 7.33335 9 8.22869 9 9.33335V10.6667C9 11.7714 9.89533 12.6667 11 12.6667H13.5286L16.3333 15.3334V4.66669Z" />
        </svg>
        <div class="box-border block flex-grow">
          <span
            dir="ltr"
            data-orientation="horizontal"
            aria-disabled="false"
            class={sliderVariants.root({ size: '2', variant: 'surface' })}
            style={{ '--radix-slider-thumb-transform': 'translateX(-50%)' }}
          >
            <span data-orientation="horizontal" class={sliderVariants.track}>
              <span
                data-orientation="horizontal"
                class={sliderVariants.range}
                style={{ left: '0%', right: '20%' }}
              />
            </span>
            <span
              style={{
                transform: 'var(--radix-slider-thumb-transform)',
                position: 'absolute',
                left: 'calc(80% - 3.6px)',
              }}
            >
              <span
                role="slider"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-orientation="horizontal"
                data-orientation="horizontal"
                tabindex="-1"
                class={sliderVariants.thumb}
                data-radix-collection-item
                aria-valuenow="80"
              />
            </span>
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="20"
          height="20"
          fill="currentcolor"
          fill-opacity="0.7"
          color="var(--gray-a9)"
        >
          <path d="M 20.037109 5.6464844 A 1.0001 1.0001 0 0 0 19.236328 7.2734375 C 20.963426 9.4832305 22 12.243759 22 15.255859 C 22 18.055119 21.105815 20.636923 19.59375 22.763672 A 1.0001 1.0001 0 1 0 21.222656 23.921875 C 22.962591 21.474623 24 18.4826 24 15.255859 C 24 11.78396 22.799402 8.5851757 20.8125 6.0429688 A 1.0001 1.0001 0 0 0 20.037109 5.6464844 z M 11 7 L 6.7929688 11 L 3 11 C 1.343 11 0 12.343 0 14 L 0 16 C 0 17.657 1.343 19 3 19 L 6.7929688 19 L 11 23 L 11 7 z M 14.738281 8.5917969 A 1.0001 1.0001 0 0 0 14.001953 10.291016 C 15.239451 11.587484 16 13.328154 16 15.255859 C 16 16.979025 15.392559 18.553804 14.380859 19.796875 A 1.0001 1.0001 0 1 0 15.931641 21.058594 C 17.219941 19.475665 18 17.450694 18 15.255859 C 18 12.799565 17.023721 10.559688 15.449219 8.9101562 A 1.0001 1.0001 0 0 0 14.738281 8.5917969 z" />
        </svg>
      </div>
      <div class="grid grid-cols-4 pb-1 pt-2">
        <label class={cx(textVariants(), 'flex flex-col items-center gap-2')}>
          <Button
            data-accent-color
            data-radius="full"
            tabindex="-1"
            styled={{ type: 'icon' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M 21 4 C 20.448 4 20 4.448 20 5 L 20 25 C 20 25.552 20.448 26 21 26 L 25 26 C 25.552 26 26 25.552 26 25 L 26 5 C 26 4.448 25.552 4 25 4 L 21 4 z M 13 10 C 12.448 10 12 10.448 12 11 L 12 25 C 12 25.552 12.448 26 13 26 L 17 26 C 17.552 26 18 25.552 18 25 L 18 11 C 18 10.448 17.552 10 17 10 L 13 10 z M 5 16 C 4.448 16 4 16.448 4 17 L 4 25 C 4 25.552 4.448 26 5 26 L 9 26 C 9.552 26 10 25.552 10 25 L 10 17 C 10 16.448 9.552 16 9 16 L 5 16 z" />
            </svg>
          </Button>
          <div class="flex flex-col">
            <span class={cx(textVariants(), 'text-center font-medium')}>
              Normalize
            </span>
            <span
              data-accent-color="gray"
              class={cx(textVariants({ size: '1' }), 'text-center')}
            >
              On
            </span>
          </div>
        </label>
        <label class={cx(textVariants(), 'flex flex-col items-center gap-2')}>
          <Button
            data-accent-color
            data-radius="full"
            tabindex="-1"
            styled={{ type: 'icon' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M 22 4 A 1.0001 1.0001 0 1 0 22 6 L 28 6 A 1.0001 1.0001 0 1 0 28 4 L 22 4 z M 2 8 A 1.0001 1.0001 0 1 0 2 10 L 8 10 A 1.0001 1.0001 0 1 0 8 8 L 2 8 z M 22 8 A 1.0001 1.0001 0 1 0 22 10 L 28 10 A 1.0001 1.0001 0 1 0 28 8 L 22 8 z M 2 12 A 1.0001 1.0001 0 1 0 2 14 L 8 14 A 1.0001 1.0001 0 1 0 8 12 L 2 12 z M 22 12 A 1.0001 1.0001 0 1 0 22 14 L 28 14 A 1.0001 1.0001 0 1 0 28 12 L 22 12 z M 2 16 A 1.0001 1.0001 0 1 0 2 18 L 8 18 A 1.0001 1.0001 0 1 0 8 16 L 2 16 z M 12 16 A 1.0001 1.0001 0 1 0 12 18 L 18 18 A 1.0001 1.0001 0 1 0 18 16 L 12 16 z M 22 16 A 1.0001 1.0001 0 1 0 22 18 L 28 18 A 1.0001 1.0001 0 1 0 28 16 L 22 16 z M 2 20 A 1.0001 1.0001 0 1 0 2 22 L 8 22 A 1.0001 1.0001 0 1 0 8 20 L 2 20 z M 12 20 A 1.0001 1.0001 0 1 0 12 22 L 18 22 A 1.0001 1.0001 0 1 0 18 20 L 12 20 z M 22 20 A 1.0001 1.0001 0 1 0 22 22 L 28 22 A 1.0001 1.0001 0 1 0 28 20 L 22 20 z M 2 24 A 1.0001 1.0001 0 1 0 2 26 L 8 26 A 1.0001 1.0001 0 1 0 8 24 L 2 24 z M 12 24 A 1.0001 1.0001 0 1 0 12 26 L 18 26 A 1.0001 1.0001 0 1 0 18 24 L 12 24 z M 22 24 A 1.0001 1.0001 0 1 0 22 26 L 28 26 A 1.0001 1.0001 0 1 0 28 24 L 22 24 z" />
            </svg>
          </Button>
          <div class="flex flex-col">
            <span class={cx(textVariants(), 'text-center font-medium')}>
              Equalizer
            </span>
            <span
              data-accent-color="gray"
              class={cx(textVariants({ size: '1' }), 'text-center')}
            >
              On
            </span>
          </div>
        </label>
        <label class={cx(textVariants(), 'flex flex-col items-center gap-2')}>
          <Button
            data-accent-color="gray"
            data-radius="full"
            tabindex="-1"
            styled={{ type: 'icon' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M 15 3 C 14.501862 3 14.004329 3.1237904 13.554688 3.3710938 L 4.7773438 8.1992188 C 4.2990638 8.4622726 4 8.9690345 4 9.5136719 L 4 10.128906 L 4 20.048828 C 4 20.573313 4.2799803 21.064852 4.7265625 21.333984 A 1.0001 1.0001 0 0 0 4.7285156 21.335938 L 13.457031 26.572266 C 14.405619 27.141718 15.594381 27.141718 16.542969 26.572266 L 25.269531 21.337891 L 25.271484 21.335938 C 25.723679 21.065216 26 20.572371 26 20.048828 L 26 9.5136719 C 26 8.9690345 25.700936 8.4622727 25.222656 8.1992188 L 16.445312 3.3710938 C 15.99567 3.1237903 15.498138 3 15 3 z M 15 5 C 15.166032 5 15.332064 5.0423034 15.482422 5.125 L 23.166016 9.3496094 L 19.755859 11.179688 L 20.701172 12.941406 L 24 11.171875 L 24 19.765625 L 16 24.566406 L 16 21 L 14 21 L 14 24.566406 L 6 19.765625 L 6 11.171875 L 9.2988281 12.941406 L 10.244141 11.179688 L 6.8339844 9.3496094 L 14.517578 5.125 C 14.667936 5.0423034 14.833968 5 15 5 z M 15 11 A 4 4 0 0 0 15 19 A 4 4 0 0 0 15 11 z" />
            </svg>
          </Button>
          <div class="flex flex-col">
            <span class={cx(textVariants(), 'text-center font-medium')}>
              3D Audio
            </span>
            <span
              data-accent-color="gray"
              class={cx(textVariants({ size: '1' }), 'text-center')}
            >
              Off
            </span>
          </div>
        </label>
        <label class={cx(textVariants(), 'flex flex-col items-center gap-2')}>
          <Button
            data-accent-color="gray"
            data-radius="full"
            tabindex="-1"
            styled={{ type: 'icon' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="16"
              height="16"
              fill="currentcolor"
            >
              <path d="M 8.984375 3.9863281 A 1.0001 1.0001 0 0 0 8 5 L 8 16 A 1.0001 1.0001 0 1 0 10 16 L 10 5 A 1.0001 1.0001 0 0 0 8.984375 3.9863281 z M 4.984375 6.9863281 A 1.0001 1.0001 0 0 0 4 8 L 4 16 A 1.0001 1.0001 0 1 0 6 16 L 6 8 A 1.0001 1.0001 0 0 0 4.984375 6.9863281 z M 12.984375 9.9863281 A 1.0001 1.0001 0 0 0 12 11 L 12 16 A 1.0001 1.0001 0 1 0 14 16 L 14 11 A 1.0001 1.0001 0 0 0 12.984375 9.9863281 z M 0.984375 11.986328 A 1.0001 1.0001 0 0 0 0 13 L 0 16 A 1.0001 1.0001 0 1 0 2 16 L 2 13 A 1.0001 1.0001 0 0 0 0.984375 11.986328 z M 16.984375 14.986328 A 1.0001 1.0001 0 0 0 16 16 L 16 21 A 1.0001 1.0001 0 1 0 18 21 L 18 16 A 1.0001 1.0001 0 0 0 16.984375 14.986328 z M 20.984375 14.986328 A 1.0001 1.0001 0 0 0 20 16 L 20 26 A 1.0001 1.0001 0 1 0 22 26 L 22 16 A 1.0001 1.0001 0 0 0 20.984375 14.986328 z M 24.984375 14.986328 A 1.0001 1.0001 0 0 0 24 16 L 24 23 A 1.0001 1.0001 0 1 0 26 23 L 26 16 A 1.0001 1.0001 0 0 0 24.984375 14.986328 z M 28.984375 14.986328 A 1.0001 1.0001 0 0 0 28 16 L 28 19 A 1.0001 1.0001 0 1 0 30 19 L 30 16 A 1.0001 1.0001 0 0 0 28.984375 14.986328 z" />
            </svg>
          </Button>
          <div class="flex flex-col">
            <span class={cx(textVariants(), 'text-center font-medium')}>
              Cross-Fade
            </span>
            <span
              data-accent-color="gray"
              class={cx(textVariants({ size: '1' }), 'text-center')}
            >
              Off
            </span>
          </div>
        </label>
      </div>
    </CardWrapper>
  )
}
