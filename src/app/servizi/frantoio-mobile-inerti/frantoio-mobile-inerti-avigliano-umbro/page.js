import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Avigliano Umbro",
  canonical: links.servizi["frantoio-mobile-inerti"]["avigliano-umbro"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Avigliano Umbro",
  locationNames: { label: "Avigliano Umbro", href: "avigliano-umbro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
