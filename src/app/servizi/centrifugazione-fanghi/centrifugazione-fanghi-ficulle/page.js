import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Ficulle",
  canonical: links.servizi["centrifugazione-fanghi"]["ficulle"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Ficulle",
  locationNames: { label: "Ficulle", href: "ficulle" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
