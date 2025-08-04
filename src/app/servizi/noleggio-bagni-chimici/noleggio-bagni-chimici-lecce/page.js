import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lecce",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Lecce", 
  locationNames: {label: "Lecce", href: "lecce"} 
});
