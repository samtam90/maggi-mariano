import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Salerno",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Salerno", 
  locationNames: {label: "Salerno", href: "salerno"} 
});
