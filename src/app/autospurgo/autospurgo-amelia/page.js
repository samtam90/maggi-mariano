import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Amelia",
    canonical: links.autospurgo["amelia"],
});
export default withBaseProps({ 
    title: "Autospurgo Amelia", 
    locationNames: {label: "Amelia", href: "amelia"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
