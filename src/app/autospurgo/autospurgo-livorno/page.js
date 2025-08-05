import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Livorno",
    canonical: links.autospurgo["livorno"],
});
export default withBaseProps({ 
    title: "Autospurgo Livorno", 
    locationNames: {label: "Livorno", href: "livorno"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["livorno"],
        name: "Livorno",
    }),
});
