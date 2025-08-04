import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ravenna",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Ravenna", 
  locationNames: {label: "Ravenna", href: "ravenna"} 
});
