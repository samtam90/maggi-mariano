import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici [name]",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici [name]", 
  locationNames: {label: "[name]", href: "[path]"} 
});
