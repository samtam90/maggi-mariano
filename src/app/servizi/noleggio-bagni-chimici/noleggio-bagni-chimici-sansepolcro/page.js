import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sansepolcro",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Sansepolcro", 
  locationNames: {label: "Sansepolcro", href: "sansepolcro"} 
});
