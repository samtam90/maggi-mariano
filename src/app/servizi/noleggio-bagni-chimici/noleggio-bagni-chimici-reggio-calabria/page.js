import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Reggio Calabria",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Reggio Calabria", 
  locationNames: {label: "Reggio Calabria", href: "reggio-calabria"} 
});
