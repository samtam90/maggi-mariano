import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Terni",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Terni", 
  locationNames: {label: "Terni", href: "terni"} 
});
