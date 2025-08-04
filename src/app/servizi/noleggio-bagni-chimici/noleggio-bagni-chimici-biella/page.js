import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Biella",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Biella", 
  locationNames: {label: "Biella", href: "biella"} 
});
