import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Benevento",
    canonical: links.autospurgo["benevento"],
});
export default withBaseProps({ 
    title: "Autospurgo Benevento", 
    locationNames: {label: "Benevento", href: "benevento"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["benevento"],
        name: "Benevento",
    }),
});
