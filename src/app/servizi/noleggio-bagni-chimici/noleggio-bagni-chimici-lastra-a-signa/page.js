import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lastra a Signa",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Lastra a Signa", 
  locationNames: {label: "Lastra a Signa", href: "lastra-a-signa"} 
});
