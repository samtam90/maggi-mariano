import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pieve Santo Stefano",
  canonical: links.servizi["noleggio-bagni-chimici"]["pieve-santo-stefano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Pieve Santo Stefano",
  locationNames: { label: "Pieve Santo Stefano", href: "pieve-santo-stefano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
