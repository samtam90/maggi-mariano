import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Greve in Chianti",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Greve in Chianti", 
  locationNames: {label: "Greve in Chianti", href: "greve-in-chianti"} 
});
