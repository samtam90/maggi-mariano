import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vicchio",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Vicchio", 
  locationNames: {label: "Vicchio", href: "vicchio"} 
});
