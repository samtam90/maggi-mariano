import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bastia Umbra",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Bastia Umbra", 
  locationNames: {label: "Bastia Umbra", href: "bastia-umbra"} 
});
