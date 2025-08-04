import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Scheggino",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Scheggino", 
  locationNames: {label: "Scheggino", href: "scheggino"} 
});
