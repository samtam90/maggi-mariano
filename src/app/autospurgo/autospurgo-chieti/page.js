import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Chieti",
    canonical: links.autospurgo["chieti"],
});
export default withBaseProps({ 
    title: "Autospurgo Chieti", 
    locationNames: {label: "Chieti", href: "chieti"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["chieti"],
        name: "Chieti",
    }),
});
