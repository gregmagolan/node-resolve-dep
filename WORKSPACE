workspace(name = "node_resolve_dep")

http_archive(
    name = "build_bazel_rules_nodejs",
    url = "https://github.com/bazelbuild/rules_nodejs/archive/20ff5892612f8359aec8aaf26dd3902a24976ada.zip",
    strip_prefix = "rules_nodejs-20ff5892612f8359aec8aaf26dd3902a24976ada",
    sha256 = "07da9d4c3e688a02745d0f50709a87744706d4f5d1959b799b0ac38e97acd622",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")

node_repositories(
  package_json = ["//:package.json"],
  preserve_symlinks = True)
