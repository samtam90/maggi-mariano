import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sellano",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Sellano", 
  locationNames: {label: "Sellano", href: "sellano"} 
});
