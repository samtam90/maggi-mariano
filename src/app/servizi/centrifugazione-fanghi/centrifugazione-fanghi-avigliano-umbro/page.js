import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Avigliano Umbro",
  canonical: links.servizi["centrifugazione-fanghi"]["avigliano-umbro"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Avigliano Umbro",
  locationNames: { label: "Avigliano Umbro", href: "avigliano-umbro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
