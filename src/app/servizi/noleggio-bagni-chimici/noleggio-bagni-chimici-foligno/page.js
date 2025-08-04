import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Foligno",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Foligno", 
  locationNames: {label: "Foligno", href: "foligno"} 
});
