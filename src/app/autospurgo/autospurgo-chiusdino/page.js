import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Chiusdino",
    canonical: links.autospurgo["chiusdino"],
});
export default withBaseProps({ 
    title: "Autospurgo Chiusdino", 
    locationNames: {label: "Chiusdino", href: "chiusdino"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
