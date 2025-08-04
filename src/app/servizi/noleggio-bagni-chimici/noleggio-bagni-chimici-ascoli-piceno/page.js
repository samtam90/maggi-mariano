import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ascoli Piceno",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Ascoli Piceno", 
  locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"} 
});
