import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Avigliano Umbro",
  canonical: links.servizi["disidratazione-fanghi"]["avigliano-umbro"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Avigliano Umbro",
  locationNames: { label: "Avigliano Umbro", href: "avigliano-umbro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
