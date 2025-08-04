import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Massa Martana",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Massa Martana", 
  locationNames: {label: "Massa Martana", href: "massa-martana"} 
});
