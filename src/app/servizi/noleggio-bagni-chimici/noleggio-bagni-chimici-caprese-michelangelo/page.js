import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Caprese Michelangelo",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Caprese Michelangelo", 
  locationNames: {label: "Caprese Michelangelo", href: "caprese-michelangelo"} 
});
