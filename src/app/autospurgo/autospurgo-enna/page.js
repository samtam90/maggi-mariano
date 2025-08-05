import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Enna",
    canonical: links.autospurgo["enna"],
});
export default withBaseProps({ 
    title: "Autospurgo Enna", 
    locationNames: {label: "Enna", href: "enna"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["enna"],
        name: "Enna",
    }),
});
