import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Cagliari",
    canonical: links.autospurgo["cagliari"],
});
export default withBaseProps({ 
    title: "Autospurgo Cagliari", 
    locationNames: {label: "Cagliari", href: "cagliari"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["cagliari"],
        name: "Cagliari",
    }),
});
