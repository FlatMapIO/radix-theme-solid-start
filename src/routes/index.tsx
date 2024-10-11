import { Demo } from '~/components/demo'
import { LiveExamples } from '~/components/live-examples'
import { RadixTheme } from '~/styled/components/radix-theme'
import { TailwindIndicator } from '~/components/tailwind-indicator'

export default function Home() {
  return (
    <RadixTheme
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
    </RadixTheme>
  )
}
