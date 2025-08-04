import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Trevi",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Trevi", 
  locationNames: {label: "Trevi", href: "trevi"} 
});
