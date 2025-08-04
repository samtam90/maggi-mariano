import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Scandicci",
  canonical: links.servizi["noleggio-bagni-chimici"]["scandicci"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Scandicci", 
  locationNames: {label: "Scandicci", href: "scandicci"} 
});
