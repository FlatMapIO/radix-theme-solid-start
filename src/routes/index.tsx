import { Demo } from '~/components/demo'
import { LiveExamples } from '~/components/live-examples'
import { TailwindIndicator } from '~/components/tailwind-indicator'
import { Theme } from '~/components/theme'

export default function Home() {
  return (
    <Theme
      isRoot
      // appearance='dark'
      accentColor="brown"
      grayColor="slate"
      hasBackground={true}
      panelBackground="translucent"
      radius="medium"
      scaling="100%"
      class="radix-themes p-10 font-sans antialiased"
    >
      <Demo />
      <LiveExamples />
      <TailwindIndicator />
    </Theme>
  )
}
