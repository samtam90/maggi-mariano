import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Marsciano",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Marsciano", 
  locationNames: {label: "Marsciano", href: "marsciano"} 
});
