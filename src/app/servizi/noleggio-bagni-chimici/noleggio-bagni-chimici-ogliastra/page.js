import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ogliastra",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Ogliastra", 
  locationNames: {label: "Ogliastra", href: "ogliastra"} 
});
