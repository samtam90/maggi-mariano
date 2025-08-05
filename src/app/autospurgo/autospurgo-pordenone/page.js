import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Pordenone",
    canonical: links.autospurgo["pordenone"],
});
export default withBaseProps({ 
    title: "Autospurgo Pordenone", 
    locationNames: {label: "Pordenone", href: "pordenone"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["pordenone"],
        name: "Pordenone",
    }),
});
