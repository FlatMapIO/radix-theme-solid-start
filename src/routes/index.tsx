import { Demo } from '~/components/demo'
import { Theme } from '~/components/theme'

export default function Home() {
  return (
    <Theme
      isRoot
      accentColor="brown"
      grayColor="slate"
      hasBackground={true}
      panelBackground="translucent"
      radius="medium"
      scaling="100%"
      class="radix-themes p-10 [transform:scale(calc(12/16))]"
    >
      <Demo />
    </Theme>
  )
}
