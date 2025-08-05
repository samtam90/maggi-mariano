import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Avigliano Umbro",
  canonical: links.servizi["pulizia-fognature"]["avigliano-umbro"],
});
export default withBaseProps({
  title: "Pulizia fognature Avigliano Umbro",
  locationNames: { label: "Avigliano Umbro", href: "avigliano-umbro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
