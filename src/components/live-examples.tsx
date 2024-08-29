import { NavigationMenu } from '@kobalte/core/navigation-menu'
import { For } from 'solid-js'

import { navigationMenuVariants } from '../styled/components/navigation-menu'
import style from '../styled/components/navigation-menu.module.css'

export function LiveExamples() {
  return (
    <>
      <NavigationMenu class={style['root']} orientation="horizontal">
        <NavigationMenu.Menu>
          <NavigationMenu.Trigger class={style['trigger']}>
            Learn{' '}
            <NavigationMenu.Icon
              aria-hidden="true"
              class={style['trigger-indicator']}
            >
              <ChevronDownIcon />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>
          <NavigationMenu.Portal>
            <NavigationMenu.Content
              class={`${style['content']} ${style['content-1']}`}
            >
              <NavigationMenu.Item
                class={style['item-callout']}
                href="https://kobalte.dev"
              >
                <img
                  src="https://kobalte.dev/android-chrome-192x192.png"
                  role="presentation"
                  alt="Kobalte"
                />
                <NavigationMenu.ItemLabel class={style['item-label']}>
                  Kobalte
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription
                  class={style['item-description']}
                >
                  Unstyled, accessible components for SolidJS.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item
                class={style['item']}
                href="https://pigment.kobalte.dev"
              >
                <NavigationMenu.ItemLabel class={style['item-label']}>
                  Pigment
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription
                  class={style['item-description']}
                >
                  Ready-to-use components with a consistent look and feel.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item
                class={style['item']}
                href="https://www.solidjs.com/"
              >
                <NavigationMenu.ItemLabel class={style['item-label']}>
                  SolidJS
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription
                  class={style['item-description']}
                >
                  Simple and performant reactivity for building user interfaces.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item
                class={style['item']}
                href="https://start.solidjs.com/"
              >
                <NavigationMenu.ItemLabel class={style['item-label']}>
                  SolidStart
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription
                  class={style['item-description']}
                >
                  Fine-grained reactivity goes fullstack.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
            </NavigationMenu.Content>
          </NavigationMenu.Portal>
        </NavigationMenu.Menu>

        <NavigationMenu.Menu>
          <NavigationMenu.Trigger class={style['trigger']}>
            Overview{' '}
            <NavigationMenu.Icon class={style['trigger-indicator']}>
              <ChevronDownIcon />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>
          <NavigationMenu.Portal>
            <NavigationMenu.Content
              class={`${style['content']} ${style['content-2']}`}
            >
              <NavigationMenu.Item
                class={style['item']}
                href="https://kobalte.dev/docs/core/overview/introduction"
              >
                <NavigationMenu.ItemLabel class={style['item-label']}>
                  Introduction
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription
                  class={style['item-description']}
                >
                  Build high-quality, accessible design systems and web apps.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item
                class={style['item']}
                href="https://kobalte.dev/docs/core/overview/getting-started"
              >
                <NavigationMenu.ItemLabel class={style['item-label']}>
                  Getting started
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription
                  class={style['item-description']}
                >
                  A quick tutorial to get you up and running with Kobalte.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item
                class={style['item']}
                href="https://kobalte.dev/docs/core/overview/styling"
              >
                <NavigationMenu.ItemLabel class={style['item-label']}>
                  Styling
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription
                  class={style['item-description']}
                >
                  Unstyled and compatible with any styling solution.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item
                class={style['item']}
                href="https://kobalte.dev/docs/core/overview/animation"
              >
                <NavigationMenu.ItemLabel class={style['item-label']}>
                  Animation
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription
                  class={style['item-description']}
                >
                  Use CSS keyframes or any animation library of your choice.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item
                class={style['item']}
                href="https://kobalte.dev/docs/core/overview/polymorphism"
              >
                <NavigationMenu.ItemLabel class={style['item-label']}>
                  Polymorphism
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription
                  class={style['item-description']}
                >
                  Customize behavior or integrate existing libraries.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item
                class={style['item']}
                href="https://kobalte.dev/docs/changelog"
              >
                <NavigationMenu.ItemLabel class={style['item-label']}>
                  Changelog
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription
                  class={style['item-description']}
                >
                  Kobalte releases and their changelogs.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
            </NavigationMenu.Content>
          </NavigationMenu.Portal>
        </NavigationMenu.Menu>

        <NavigationMenu.Trigger
          class={style['trigger']}
          as="a"
          href="https://github.com/kobaltedev/kobalte"
          target="_blank"
        >
          GitHub
        </NavigationMenu.Trigger>

        <NavigationMenu.Viewport class={style['viewport']}>
          <NavigationMenu.Arrow class={style['arrow']} />
        </NavigationMenu.Viewport>
      </NavigationMenu>

      <div style="height: 2rem;" />
    </>
  )
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 15 15">
      <title>Chevron</title>
      <path
        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  )
}
