import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Avigliano Umbro",
    canonical: links.autospurgo["avigliano-umbro"],
});
export default withBaseProps({ 
    title: "Autospurgo Avigliano Umbro", 
    locationNames: {label: "Avigliano Umbro", href: "avigliano-umbro"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
