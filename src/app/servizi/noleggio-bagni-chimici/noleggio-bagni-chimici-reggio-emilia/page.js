import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Reggio Emilia",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Reggio Emilia", 
  locationNames: {label: "Reggio Emilia", href: "reggio-emilia"} 
});
