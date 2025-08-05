import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Bagno di Romagna",
    canonical: links.autospurgo["bagno-di-romagna"],
});
export default withBaseProps({ 
    title: "Autospurgo Bagno di Romagna", 
    locationNames: {label: "Bagno di Romagna", href: "bagno-di-romagna"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
