import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Brescia",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Brescia", 
  locationNames: {label: "Brescia", href: "brescia"} 
});
