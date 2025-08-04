import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gualdo Tadino",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Gualdo Tadino", 
  locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"} 
});
