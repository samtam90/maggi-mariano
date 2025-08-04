import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gualdo Cattaneo",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Gualdo Cattaneo", 
  locationNames: {label: "Gualdo Cattaneo", href: "gualdo-cattaneo"} 
});
