import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Enna",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Enna", 
  locationNames: {label: "Enna", href: "enna"} 
});
