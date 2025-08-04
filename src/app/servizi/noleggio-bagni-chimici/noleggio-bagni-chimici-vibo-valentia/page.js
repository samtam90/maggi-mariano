import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vibo Valentia",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Vibo Valentia", 
  locationNames: {label: "Vibo Valentia", href: "vibo-valentia"} 
});
