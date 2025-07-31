<script lang="ts">
	import { T } from '@threlte/core';
  import { Sky } from '@threlte/extras'

</script>

<T.Group rotation={[0,  0, 0]}>
<Sky 
  elevation={2}
  azimuth={0}
  rayleigh={0.2}
  mieCoefficient={0.001}
  mieDirectionalG={0.9}
  turbidity={15}
  scale={10}
  setEnvironment={true}
  exposure={0.01}
/>
</T.Group>