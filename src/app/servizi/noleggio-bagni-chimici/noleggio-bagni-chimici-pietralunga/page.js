import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pietralunga",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pietralunga", 
  locationNames: {label: "Pietralunga", href: "pietralunga"} 
});
